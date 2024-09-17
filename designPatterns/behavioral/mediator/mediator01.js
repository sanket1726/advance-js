class Runway{
    constructor(name, clear = false){
        this.name = name
        this.clear = clear
    }
}

class AirPlane{
    constructor(name){
        this.name = name
    }
    land(){}
}

class Tower{
    clearForLanding(runway, plane){
        if(runway.clear){
            console.log(`Runway ${runway.name} clear for landing. Plane ${plane.name} can land.`)
        }else {
            console.log(`Runway ${runway.name} is not clear for landing. Plane ${plane.name} can't land.`)
        }
    }
}

const runway122 = new Runway('122', true)
const runway12A = new Runway('12A', false)
const planeFA12 = new AirPlane('FA12')
const planeA1S2 = new AirPlane('A1S2')

const watchTower = new Tower()

watchTower.clearForLanding(runway122, planeA1S2)
watchTower.clearForLanding(runway12A, planeA1S2)