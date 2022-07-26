import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { IProcess } from '../../models/Process'
import { Button } from '../../shared/kit/Button'
import { Spacing, VerticalLayout } from '../../shared/kit/Layout'
import TextField from '../../shared/kit/TextField'
import { Text } from '../../shared/kit/Typography'
import { useAppDispatch } from '../../store'
import { resetBackground, selectSystemInfo, setBackground } from '../../store/system/systemSlice'

type Props = {
  application: IProcess
  close(): void
}

const SettingWidget: FC<Props> = () => {
  const systemInfo = useSelector(selectSystemInfo)
  const dispatch = useAppDispatch()
  const [backgroundValue, setBackgroundValue] = useState(systemInfo.background)
  const handleSave = () => {
    dispatch(setBackground(backgroundValue))
  }
  const handleReset = () => dispatch(resetBackground())
  return (
    <VerticalLayout spacing={Spacing.m}>
      <Text>Задний фон</Text>
      <TextField
        type='url'
        value={backgroundValue}
        onChange={(e) => setBackgroundValue(e.target.value)}
      />
      <Button variant='primary' onClick={handleSave}>
        Сохранить
      </Button>
      <Button variant='primary' onClick={handleReset}>
        Сбросить
      </Button>
    </VerticalLayout>
  )
}

export default SettingWidget
