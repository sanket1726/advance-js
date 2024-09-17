class IOSButton {}
class AndroidButton {}

// creating button with new keyword aprroach
// const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()

// instead of this we can do this with factory pattern
class ButtonFactory{
    createButton(os) {
        if(os === 'ios'){
            return new IOSButton()
        }
        return new AndroidButton()
    }
}

const bFactory = new ButtonFactory()
bFactory.createButton('ios');
console.log(bFactory.createButton('ios'))