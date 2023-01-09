import { Link, Stack } from '@mui/material'

export const Contact: React.FC = () => (
  <Stack
    sx={{
      gap: '15px',
      padding: '5em 25%'
    }}
  >
    <h1
      style={{
        textAlign: 'center'
      }}
    >
      Contact us
    </h1>
    <Link href="#fb">Facebook</Link>
    <Link href="#ig">Instagram</Link>
    <Link href="#tt">TikTok</Link>
    <Link href="#ap">Apple</Link>
    <Link href="#sc">Snapchat</Link>
  </Stack>
)
