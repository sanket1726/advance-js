class PlumbingSystem {
    // low level access to plumbing system
    setPressure(v){}
    turnOn(){}
    turnOff(){}
}

class ElectricalSystem {
    // low level access to electrical system
    setVoltage(v){}
    turnOn(){}
    turnOff(){}
}

class House{
    #plumbing = new PlumbingSystem()
    #electrical = new ElectricalSystem()

    turnOnSystems(){
        this.#plumbing.setPressure(100)
        this.#plumbing.turnOn()
        this.#electrical.setVoltage(240)
        this.#electrical.turnOn()
    }
}

const client = new House();
client.turnOnSystems(); 