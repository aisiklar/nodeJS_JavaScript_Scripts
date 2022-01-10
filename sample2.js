const emitter = {
    handlers: {},
  
    on(eventName, handler) {
      if (!this.handlers[eventName])
        this.handlers[eventName] = [];
  
      this.handlers[eventName].push(handler);
    },
  
    emit(eventName, data) {
      for (const handler of this.handlers[eventName])
        handler(data);
    }
  };
  
  emitter.on('foo', data => console.log(data.text));
  
  emitter.emit('foo', { text: 'Foo event triggered' });