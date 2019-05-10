/**
 * Updates Script App Execution Triggers
 */
global.updateTriggers = () => {
  const defaultRetries = 3;

  function deleteAllTriggers() {
    ScriptApp.getProjectTriggers().forEach((trigger) => {
      ScriptApp.deleteTrigger(trigger);
    });
  }

  function addTriggerWithRetry(trigger: any, retries: number = defaultRetries): any {
    try {
      trigger.create();
    } catch (error) {
      if (retries <= 0) {
        throw new Error(`Failed to create trigger after ${defaultRetries} retries. ${error}`);
      }
      Logger.log(`Failed to create trigger due to ${error}, retrying ${retries} more times...`);
      return addTriggerWithRetry(trigger, retries - 1);
    }
  }

  deleteAllTriggers();

  // addTriggerWithRetry(
  //   ScriptApp.newTrigger('addDataToSheet')
  //     .timeBased()
  //     .onWeekDay(ScriptApp.WeekDay.MONDAY)
  //     .atHour(9),
  // );

  // addTriggerWithRetry(
  //   ScriptApp.newTrigger('updateTriggers')
  //     .timeBased()
  //     .everyHours(12),
  // );
}
