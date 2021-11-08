import './Clipboard.css'
import React from 'react'

export function Clippy(props) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M5.75 4.75H10.25V1.75H5.75V4.75Z' />
      <path d='M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379' />
    </svg>
  )
}

export function Check(props) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M13.25 4.75L6 12L2.75 8.75' />
    </svg>
  )
}

export default function Clipboard({ copied, setCopied, text, color }) {
  const isColor = (strColor) => {
    if (strColor === undefined) {
      return false
    } else {
      const s = new Option().style
      s.color = strColor
      return s.color !== ''
    }
  }

  return (
    <div
      onClick={() => {
        setCopied(true)
        navigator.clipboard.writeText(text)
      }}
      className='button'
    >
      <Clippy
        className='icon'
        style={{
          color: isColor(color) ? color : 'black',
          strokeDasharray: 50,
          strokeDashoffset: copied ? -50 : 0,
          transition: 'all 300ms ease-in-out',
        }}
      />
      <Check
        className='icon'
        style={{
          color: color ? color : 'black',
          strokeDasharray: 50,
          strokeDashoffset: copied ? 0 : -50,
          transition: 'all 300ms ease-in-out',
        }}
      />
    </div>
  )
}
