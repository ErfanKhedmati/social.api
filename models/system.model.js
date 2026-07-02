export default class System {
    constructor(nextUserId, nextPostId, lastBackupTimeApp, currentUser=null) {
        this.currentUser = currentUser;
        this.nextUserId = nextUserId;
        this.nextPostId = nextPostId;
        this.lastBackupTimeApp = lastBackupTimeApp;
    }
}