import Header from '@/components/Header'
import React, { Children } from 'react'

export default function layout({children}:any) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}
