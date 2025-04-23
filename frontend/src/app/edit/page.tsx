"use client";

import { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useRouter, useSearchParams } from 'next/navigation';

const EditTodo = () => {

    // 入力項目
    const [tag, setTag] = useState('');
    const [contents, setContents] = useState('');
    const [status, setStatus] = useState('');
    const [deadline, setDeadline] = useState('');

    // ルータ
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");


    useEffect(() => {
        loadTodo()
    }, [])

    const updateTodo = async () => {
        await axios.put(`http://localhost:8080/api/todolist/update`,
            {
                id,
                tag,
                contents,
                status,
                deadline
            });
        router.push("/");
    }

    const loadTodo = async () => {
        const result = await axios.get(`http://localhost:8080/api/todolist/${id}`);
        setTag(result.data.tag);
        setContents(result.data.contents);
        setStatus(result.data.status);
        setDeadline(result.data.deadline);
    }

    // const changeDate = (e) => {
    //     console.log(e.target.value);


    //     //日付を取得
    //     const fullDate = new Date(e.target.value);
    //     const year = fullDate.getFullYear();
    //     const month = String(fullDate.getMonth() + 1).padStart(2, '0');
    //     const day = String(fullDate.getDate()).padStart(2, '0');
    //     const formattedDate = `${year}-${month}-${day}`;

    //     console.log(formattedDate);
    //     setDeadline(e.target.value)
    // }

    return (
            <div className="container mx-auto p-8 text-center max-w-2xl">
                <div className="todo-wrapper">
                    <h1>Todo編集</h1>
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
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="0">未</option>
                            <option value="9">完了</option>
                        </select>
                        {/* <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} /> */}
                    </div>
                    <div>
                        <label htmlFor="Name">期日</label>
                        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <Button variant="contained" onClick={updateTodo}>更新</Button>
                        <Button variant="outlined" href="/">キャンセル</Button>
                    </div>
                </div>
            </div>
    )
}

export default function temp() {
    return (
        <Suspense>
            <EditTodo />
        </Suspense>
    )
}