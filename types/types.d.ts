declare type ValueOf<T> = T[keyof T];

declare type TreeNode<T> = {
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  val: T;
};

declare type ListNode<T = number> = {
  val: T;
  next: ListNode<T> | null;
}
