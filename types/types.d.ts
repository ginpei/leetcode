declare type TreeNode<T> = {
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  val: T;
};
