import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { FC, useState,useEffect } from 'react'
import styled from 'styled-components'
import { db } from '../../utils/fb'
import { useSelector } from 'react-redux'
import { selectUserInfo } from '../../store/user/userSlice'
import { IMessage } from '../../models/Message'
import moment from 'moment'
import 'moment/locale/ru'
import { useSoundContext } from '../../context/SoundContext'

moment.locale('ru')

interface IMessageProps {
    kind: 'me' | 'opponent'
}

const Dialog = styled.div`
    background: #eaeaea;
    width: 100%;
    height: 530px;
    position: relative;
    padding-bottom: 20px;
    overflow: hidden;
`

const DialogActions = styled.div`
    position: absolute;
    bottom: 0;
    left:0;
    right: 0;
    display: flex;
    padding: 10px 10px 2px 10px;
    background: white;
    box-shadow: 0 0 15px #1111;
`

const MessageText = styled.input`
    flex: 1;
    padding: 10px;
    border-radius: 6px;
    margin-right: 10px;
`
const SendMessage = styled.button`
    padding: 0 10px;
    background-color: #16a085;
    color: white;
    outline: none;
    border: none;
    border-radius: 10px;
`

const MessageList = styled.ul`
    overflow-y: auto;
    height: 480px;
    display: grid;
    gap: 10px;
    padding: 12px;
    list-style: none;
    grid-auto-rows: min-content;
`
const Message = styled.li<IMessageProps>`
    background: ${({ kind }) => kind == 'me' ? '#27ae60' : 'white'};
    color: ${({ kind }) => kind == 'me' ? 'white' : 'black'};
    margin-left: ${({ kind }) => kind == 'me' ? 'auto' : '0'};
    padding: 6px 12px;
    text-align: left;
    width: fit-content;
    min-width: 120px;
    max-width: 400px;
    border-radius: 12px;
    box-shadow: 0 0 12px #0001;
    height: fit-content;
    
    p {
        color: ${({ kind }) => kind == 'me' ? '#ecf0f1' : '#2c3e50'};
    }

    span {
        color: ${({ kind }) => kind == 'me' ? '#e3e4e4' : '#354758'};
    }
`
const MessageAuthor = styled.small`
    font-size: 14px;
    line-height: 1.5;
    font-weight: bold;
    overflow: hidden;
    word-wrap: break-word;
`
const MessageContent = styled.p`
    font-size: 12px;
    line-height: 1.5;
    overflow: hidden;
    word-wrap: break-word;
`
const MessageDate = styled.span`
    font-size: 10px;
    line-height: 1.5;
    margin-left: auto;
    margin-right: 0;
    float: right;
    clear: both;
`

const Chat:FC<unknown> = () => {
    const [message, setText] = useState('')
    const [list, setList] = useState<IMessage[]>([])
    const userName = useSelector(selectUserInfo).userName
    const audio = useSoundContext()
    async function getData(playSound = true) {
        try{
            const querySnapshot = await getDocs(collection(db, 'messages'))
            const data:IMessage[] = []
            querySnapshot.forEach((doc) => {
                data.push({id:doc.id, ...doc.data(), createdAt: new Date(doc.data().createdAt)} as IMessage)
              });
            console.log('test len', list.length, data.length)
            if(list.length < data.length && playSound) 
                audio.playAudio('/papich-tratatata.mp3')
        
            setList(data.sort((a,b)=>a.createdAt.getTime()-b.createdAt.getTime()))
        } catch(e) {
            console.error(e)
        }
    }
    useEffect(()=>{
        getData(false);
    },[])
    useEffect(()=>{
        const interval = setTimeout(getData, 5000)
        return ()=>clearInterval(interval)
    },[list])

const handleClickSend = async () => {
    try {
        if(userName){
            await addDoc(collection(db, 'messages'), {
                userName,
                message,
                createdAt: new Date().toUTCString()
            });
            setText('')
            setList([...list, {id: new Date().toUTCString(), userName: userName, message, createdAt: new Date() }])
            
            audio.playAudio('/da-jeto-zhestko.mp3')
        }
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}
  return (
    <Dialog>
        <MessageList>
            {list.map(item=>(
                <Message key={item.id} kind={item.userName === userName ? 'me': 'opponent'}>
                    <MessageAuthor>{item.userName}</MessageAuthor>
                    <MessageContent>{item.message}</MessageContent>
                    <MessageDate>{moment.duration(moment(item.createdAt).diff(moment())).humanize()}</MessageDate>
                </Message>
            ))}
            
        </MessageList>
        <DialogActions>
            <MessageText onKeyDown={(e)=>e.keyCode == 13 && handleClickSend()} onChange={(e)=>setText(e.target.value)} value={message} />
            <SendMessage onClick={handleClickSend}>☝</SendMessage>
        </DialogActions>
    </Dialog>
  )
}

export default Chat