class Stone extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/stonecopy.png");
  }

  display() {    
    super.display();
  }
}
