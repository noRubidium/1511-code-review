let globalId = 1;
export default class Review {
  constructor (codeId, lineNum, parentId, comment) {
    this.id = globalId++;
    this.codeId = codeId;
    this.lineNum = lineNum;
    this.parentId = parentId;
    this.comment = comment;
    this.children = [];
  }
  addReview (review) {
    this.children.push(review);
  }
}
