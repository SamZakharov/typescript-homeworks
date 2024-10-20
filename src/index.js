'use strict';

class EventManager {
    constructor() {
        this.events = {};
    }
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    off(event, callback) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(fn => fn !== callback);
    }
    trigger(event, ...args) {
        if (!this.events[event]) return;
        this.events[event].forEach(callback => callback(...args));
    }
}
const eventManager = new EventManager();

function onLogin(username) {
    console.log(`${username} вошел в систему.`);
}

function onLogout() {
    console.log('Пользователь вышел.');
}
eventManager.on('login', onLogin);
eventManager.on('logout', onLogout);
eventManager.trigger('login', 'Alice');
eventManager.trigger('logout');
eventManager.off('login', onLogin);
eventManager.trigger('login', 'Bob');
