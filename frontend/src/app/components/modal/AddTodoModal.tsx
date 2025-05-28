// クライアントコンポーネント
"use client" // ←※※注意ポイント①※※
import React, { useState } from 'react';
import axios from 'axios';
import Modal from "react-modal";
import Button from '@mui/material/Button';
import "./AddTodoModal.scss"

Modal.setAppElement("#todoApp");

const AddTodoModal = ({ isOpen, closeModal }) => {

    // 日付取得
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month = String(fullDate.getMonth() + 1).padStart(2, '0');
    const day = String(fullDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // 入力項目
    const [tag, setTag] = useState('');
    const [contents, setContents] = useState('');
    const [status, setStatus] = useState('0');
    const [deadline, setDeadline] = useState(formattedDate);

    const createTodo = async () => {
        await axios.post("http://localhost:8080/api/create",
            {
                tag,
                contents,
                status,
                deadline
            });
        location.href="";
    }

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
        <Modal
            isOpen={isOpen}
            onAfterOpen={() => {
                // モーダルが開いた後の処理
            }}
            onRequestClose={closeModal}
            style={modalStyle}
            contentLabel="Example Modal"
        >
            <div className="addTodoModalWrapper">
                <h1>Todoを追加</h1>
                <div>
                    <label htmlFor="Name">カテゴリ</label>
                    <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Name">内容</label>
                    <input type="text" value={contents} onChange={(e) => setContents(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Name">ステータス</label>
                    <select onChange={(e) => setStatus(e.target.value)}>
                        <option value="0">未</option>
                        <option value="9">完了</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Name">期日</label>
                    <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                </div>
                <br />
                <div>
                    <Button variant="contained" onClick={createTodo}>登録</Button>
                    <Button variant="outlined" href="/">キャンセル</Button>
                </div>
            </div>
        </Modal>
    )
}

export default AddTodoModal;