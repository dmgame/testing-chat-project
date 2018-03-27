class UI {
    constructor() {
        this.messageContainer = document.querySelector('.messages-wrapper');
    }

    showMessage(message, user) {
        this.clearAlertMessage();

        const template = `
            <div class="card bg-light mt-3">
                <div class="card-header">Message from: ${user.name}</div>
                <div class="card-body">
                    <p class="card-text">${message}</p>
                </div>
            </div>
        `;

        this.messageContainer.insertAdjacentHTML('beforeend', template);
    }

    showWritingMessage(name) {
        this.clearAlertMessage();

        const alert = `
            <div class="alert alert-info fixed-top">Writing user: ${name}</div>
        `;

        document.body.insertAdjacentHTML('afterbegin', alert);

        setTimeout(() => this.clearAlertMessage(), 1000);
    }

    clearAlertMessage() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) currentAlert.remove();
    }
}