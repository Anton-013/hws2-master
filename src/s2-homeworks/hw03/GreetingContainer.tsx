import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    const trimmedName = name.trim()

    if (!trimmedName) {
        setError('Ошибка! Введите имя!')
        return
    }

    try {
        addUserCallback(trimmedName)
        setName('')
        setError('')
    } catch (error) {
        setError('Не удалось добавить пользователя')
        console.error('Ошибка при добавлении пользователя: ', error)
    }
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => { // если имя пустое - показать ошибку
    if (!name.trim()) {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setLastUserName(name)
        if (name.trim()) {
            setTotalUsers(totalUsers + 1)
        }
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const [totalUsers, setTotalUsers] = useState<number>(0) // need to fix
    const [lastUserName, setLastUserName] = useState<string>('') // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
