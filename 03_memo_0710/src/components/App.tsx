import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App:FC = () =>{
  //カスタムフックからそれぞれ取得
  const { memos, addTodo, deleteTodo } = useMemoList();
  //テキストボックスState
  const[text, setText] = useState<String>("");
  //メモ一覧
  // const[memos, setMemos] = useState<String[]>([]);

  //テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => 
  setText(e.target.value);

  //追加ボタン押下時
  const onClickAdd = () =>{
    //State変更を正常に検知させるための新たな配列
    // const newMemos = [...memos];
    //テキストボックスの入力内容をメモ配列に追加
    // newMemos.push(text);
    // setMemos(newMemos);
    //カスタムフックのメモ追加ロジック実行
    addTodo(text);
    //テキストボックスを空に
    setText("");
  
  };

  //削除ボタン押下時（何番目が押されたかを引数で受け取り）
  const onClickDelete = useCallback((index: number) => {
    //State変更を正常に検知させるための新たな配列を生成
  //   const newMemos = [...memos];
  //   //メモ配列から該当の要素を削除
  //   newMemos.splice(index,1);
  //   setMemos(newMemos);
  // },[memos]);
    deleteTodo(index);
  },[deleteTodo]);

  return (
  <div>
  <h1>Todo</h1>
  <input type ="text" value ={text} onChange={onChangeText}/>
  <SButton onClick = {onClickAdd}>追加</SButton>
  <MemoList memos = {memos} onClickDelete={onClickDelete}/>
 
  </div>
  );
};

const SButton = styled.button`
 margin-left : 16px;
`;
