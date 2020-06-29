let coin = {
  state: 0,
  flip: function () {
    let coinFlip = Math.random()

    if (coinFlip < .5) {
      this.state = 0
    }
    else {
      this.state = 1
    }
    /* 1. Randomly set your coin object's "state" property to be either 
       0 or 1: use "this.state" to access the "state" property on this object.*/
  },
  toString: function () {
    let string = document.createElement('div')
    document.body.append(string)

    if (this.state === 0) {
      string.append('Heads')
      return 'Heads'
    } 
    else if (this.state === 1) {
      string.append('Tails')
      return 'Tails'
    }
    /* 2. Return the string "Heads" or "Tails", depending on whether
       "this.state" is 0 or 1. */
  },
  toHTML: function () {
    let image = document.createElement('img');

    if (this.state === 0) {
      document.body.append(image)
      image.src = './assets/Images/heads.png'
    } 
    else if (this.state === 1) {
      document.body.append(image)
      image.src = './assets/Images/tails.png'
    }
    /* 3. Set the properties of this image element to show either face-up
    or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
  display20Flips: function () {
    for (let index = 0; index < 20; index++) {
      this.flip()
      this.toString()
    }
  },
  display20Images: function () {
    for (let index = 0; index < 20; index++) {
      this.flip()
      this.toHTML()
    }
  }
};
