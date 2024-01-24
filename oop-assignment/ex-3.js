class Userfacebook{
  constructor(newPost, newShare, newCommentAndLike, newPages, newNotification){
    this.newPost = newPost;
    this.newShare = newShare;
    this.newCommentAndLike = newCommentAndLike;
    this.newPages = newPages;
    this.newNotification = newNotification;
  }
}
class User {
  constructor(id, name, email){
    this.id = id
    this.name = name
    this.email = email
  }
 }

  class PostList{
  constructor(){
          
      this.posts = []

  
          
   }
    addPost(post){
      this.posts.push(post);
    }
    sharePost(post){
      console.log(`You've shared post ${post.titile} to your friend.`);
    }
  }
  

  class Post {
      constructor(id, titile, content ){
          this.id = id;
          this.titile = titile;
          this.content = content;
          this.comment = [];
          
      }

    addComment(comment){
      this.comment.push(comment)
    }
  }
  class Comment {
    constructor(id, content, createdBy,){
      this.id = id;
      this.content = content;
      this.createdBy = createdBy;
      this.like = 0;
    }
    addLike(){
      this.like += 1;
    }

  }
  
  class Facebook {
      constructor(){
      this.groupList = [];
      this.pageList = []

      }
      addGroup(groupList){
          this.groupList.push(groupList);
      }

      addPage(pageList){
          this.pageList.push(pageList);
      }
  }

  class FacebookPage{
      constructor(name){
          this.name = name;
      }
  }

  class FacebookGroup{
      constructor(name){
          this.name = name;
      }
  }
  

  class Notification{
      constructor(id){
          this.id = id;
      }
      send(nameComment, postTitle){
        
          console.log(`Notification: ${nameComment} has just commented on this post—${postTitle}`)
      }
  }