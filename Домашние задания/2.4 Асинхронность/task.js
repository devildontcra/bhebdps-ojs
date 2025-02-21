class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    
    const existingClock = this.alarmCollection.find(clock => clock.time === time);
    
    if (existingClock) {
      console.warn('Уже присутствует звонок на это же время');
    } else {
      this.alarmCollection.push({
        time,
        callback,
        canCall: true
      });
    }
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
  }

  getCurrentFormattedTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId !== null) return; // Если интервал уже есть, не запускаем новый
    
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      
      this.alarmCollection.forEach(clock => {
        if (clock.time === currentTime && clock.canCall) {
          clock.canCall = false; // Запрещаем повторный вызов
          clock.callback(); // Вызываем callback
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(clock => clock.canCall = true);

  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
