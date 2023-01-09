import { Box, Tab, Tabs, Typography, Stack } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { client } from 'common'
import type { Product } from 'common/types'
import { Gallery } from 'modules/gallery'
import css from './admin.module.css'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    'aria-controls': `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`
  }
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export const Admin: React.FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const form = useForm({ mode: 'all' })

  const notify = () =>
    toast('Product added successfully', {
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
      <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: '0 25%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Tabs">
          <Tab label="Add product" {...a11yProps(0)} />
          <Tab label="Edit products" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
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
          <h1>Add product</h1>

          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className={css.inputText}
            {...form.register('name')}
          />

          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            className={css.inputNumber}
            {...form.register('price')}
          />

          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            className={css.image}
            {...form.register('image')}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className={css.description}
            {...form.register('description')}
          />

          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            className={css.inputNumber}
            {...form.register('quantity')}
          />

          <label htmlFor="type">Type</label>
          <select id="type" className={css.select} {...form.register('type')}>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Dog">Dog</option>
          </select>

          <button type="submit" className={css.button}>
            Submit
          </button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack
          sx={{
            padding: '0 3em'
          }}
        >
          <h1>Edit products</h1>
        </Stack>
        <Gallery dev />
      </TabPanel>
      <ToastContainer />
    </div>
  )
}
