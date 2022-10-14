import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Loader from '../components/Loader'
import toast from 'react-hot-toast';
export default function Home() {
  return (
  <div>
    <Loader show />

    <button onClick={() => toast.success('hello toast')}>
      Toast Me
    </button>
    </div>
  )
}
//tesy