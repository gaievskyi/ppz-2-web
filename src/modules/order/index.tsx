import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { client } from 'common'
import type { Product } from 'common/types'
import { Gallery } from 'modules/gallery'
import css from './order.module.css'

export const Order: React.FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const form = useForm({ mode: 'all' })

  const notify = () =>
    toast("We've already started working on your order.", {
      position: 'bottom-right',
      type: 'success'
    })

  const createProductMutation = useMutation(
    ['createProduct'],
    async (product: Product) => {
      const data = client.post('/products', product).then((res) => res.data)
      return data
    },
    {
      onSuccess: () => {
        notify()
        form.reset()
      }
    }
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '80px'
      }}
    >
      <form
        onSubmit={form.handleSubmit((data) => {
          createProductMutation.mutate(data as Product)
        })}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
          padding: '2em 35%'
        }}
      >
        <h1>Order</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className={css.inputText}
          {...form.register('name')}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="text"
          className={css.inputText}
          {...form.register('lastName')}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className={css.inputText}
          {...form.register('email')}
        />
        <label htmlFor="price">Phone number</label>
        <input
          id="phone"
          type="number"
          className={css.inputNumber}
          {...form.register('phone')}
        />

        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          className={css.inputNumber}
          {...form.register('address')}
        />

        <label htmlFor="deliveryType">Delivery</label>
        <select
          id="deliveryType"
          className={css.select}
          {...form.register('deliveryType')}
        >
          <option value="DHL">DHL</option>
          <option value="inPost">inPost</option>
          <option value="another">Another</option>
        </select>

        <button type="submit" className={css.button}>
          To Payment
        </button>
      </form>

      <ToastContainer />
    </div>
  )
}
