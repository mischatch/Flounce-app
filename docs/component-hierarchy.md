## Component Hierarchy

**AuthFormContainer**
 - AuthForm

 **HomeContainer**
 - ProjectIndex

**ProjectShowContainer**
* ProjectItem
   * ProjectItemDetails
   * ImagesIndex
   * CommentForm
   * CommentsIndex
     * CommentItem

**ProfileShowContainer**
 * User Detail

 ____________________________________________
 |Path              |Component               |
 |------------------|------------------------|
 |"/sign-up"        |"AuthFormContainer"     |
 |"/sign-in"        |"AuthFormContainer"     |
 |"/home"           |"HomeContainer"         |
 |"/projects/id"    |"ProjectShowContainer"  |
 |"/users/id"       |"ProfileShowContainer"  |
 |__________________|_______________________ |
