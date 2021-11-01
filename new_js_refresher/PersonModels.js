class PersonDTO {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class BananaDTO {
  constructor(bananaName) {
    this.bananaName = bananaName;
  }
  getBananaName() {
    return this.bananaName;
  }
}

module.exports = {
  PersonDTO: PersonDTO,
  BananaDTO: BananaDTO,
};
