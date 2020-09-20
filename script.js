class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
    alert(this);
  }

  static createTodays() {
    // помним, что this = Article
    alert(this);
    return new this("Сегодняшний дайджест", new Date());
  }
}

let article = Article.createTodays();

alert( article.title ); // Сегодняшний дайджест