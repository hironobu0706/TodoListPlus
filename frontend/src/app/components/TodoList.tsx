// クライアントコンポーネント
"use client" // ←※※注意ポイント①※※

// 必要なライブラリとコンポーネントをインポート
import React, { useEffect, useState } from 'react';
// import TodoRow from './TodoRow';
// import TodoAdd from './TodoAdd';
import axios from 'axios';
import { TodoItemInterface } from '../types/types'
import Button from '@mui/material/Button';
// import Link from "next/link";
import { sortTable } from '../util/sortTable';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// modal
// import { AddModal } from './modal/AddModal';

import Modal from "react-modal";

Modal.setAppElement("#todoApp");

const TodoList = () => {
    // タスクと新しいタスク入力を管理するためのuseState
    const [tasks, setTasks] = useState<Array<TodoItemInterface>>([]); // ←※※注意ポイント②※※

    useEffect(() => {
        loadTodos();
    }, [])

    const loadTodos = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/getAllTodolist");
            setTasks(result.data);
        } catch (e) {
            console.log(e);
            // サンプルデータ
            const sampleData: TodoItemInterface = {
                id: 999,
                tag: 'タグ',
                contents: 'サンプルデータ',
                status: 0,
                deadline: '2025-01-01'
            }
            setTasks([sampleData]);
        }
    }

    const deleteTodo = async (id: string) => {
        const res = window.confirm('本当に削除しますか？');
        if (res) {
            await axios.get(`http://localhost:8080/api/todolist/delete/${id}`);
            loadTodos();
        }
    }

    const completeTodo = async (id: string) => {
        await axios.get(`http://localhost:8080/api/todolist/complete/${id}`);
        loadTodos();
    }

    // modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };
    const openModal = () => {
        console.log('kiteru');
        setIsOpen(true);
    };

    // モーダルのスタイルを設定
    const modalStyle = {
        content: {
            width: '60%',
            height: '60%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div className="todo-wrapper">
            <h1>Todo</h1>
            <table className='todo_tables' id="data-table">
                <tbody>
                    <tr>
                        {/* <th onClick={() => sortTable(0)}>
                            id
                            <span className="sort-arrow"></span>
                        </th> */}
                        <th onClick={() => sortTable(0)}>
                            カテゴリ
                            <span className="sort-arrow"></span>
                        </th>
                        <th onClick={() => sortTable(1)}>
                            内容
                            <span className="sort-arrow"></span>
                        </th>
                        <th onClick={() => sortTable(2)}>
                            ステータス
                            <span className="sort-arrow"></span>
                        </th>
                        <th onClick={() => sortTable(3)}>
                            期日
                            <span className="sort-arrow"></span>
                        </th>
                        <th>アクション1</th>
                        <th>アクション2</th>
                    </tr>
                    {tasks.map((task, index) => {
                        const status = task.status === 0 ? "未" : "完了"

                        return (
                            <tr key={index}>
                                {/* <td>{task.id}</td> */}
                                <td>{task.tag}</td>
                                <td>{task.contents}</td>
                                <td>{status}</td>
                                <td>{task.deadline}</td>
                                <td><Button variant="contained" href={`edit?id=${task.id}`}>編集</Button></td>
                                <td>
                                    {(() => {
                                        if (task.status === 0) {
                                            return <Button variant="outlined" onClick={() => completeTodo(String(task.id))}>完了</Button>;
                                        } else {
                                            return <Button variant="contained" color="secondary" onClick={() => deleteTodo(String(task.id))}>削除</Button>;
                                        }
                                    })()}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Button variant="contained" href="create/">追加<AddCircleOutlineIcon /></Button>
            <Button variant="contained" href="home/">Home<AddCircleOutlineIcon /></Button>
            <Button variant="contained" href="about/">About<AddCircleOutlineIcon /></Button>


            <div onClick={openModal} className="text-sm cursor-pointer">
                モーダル
            </div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={() => {
                    // モーダルが開いた後の処理
                }}
                onRequestClose={closeModal}
                style={modalStyle}
                contentLabel="Example Modal"
            >
                <h2>モーダル</h2>
                <p>このモーダルの内容です。</p>
                <button onClick={closeModal}>閉じる</button>
            </Modal>
        </div>
    );
};

export default TodoList;