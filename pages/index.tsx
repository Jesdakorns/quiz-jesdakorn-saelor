import { Box, Card, CardContent, Container, FormControl, Grid, OutlinedInput } from '@mui/material';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [input, setInput] = useState('babad')
  const [output, setOutput] = useState('')
  useEffect(() => {

    setOutput(findArray(input))
  }, [input])

  const findArray = (s: string) => {
    let res = ''

    const substringFrom = (left: number, right: number) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      return s.slice(left + 1, right)
    }
    for (let i = 0; i < s.length; i++) {
      const sub1 = substringFrom(i, i);
      const sub2 = substringFrom(i, i + 1);
      const sub = sub1.length > sub2.length ? sub1 : sub2
      if (sub.length > res.length) {
        res = sub
      }
    }
    return res
  }
  return (
    <>
      <Container fixed>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth sx={{ userSelect: 'none' }}>
              <Box component={'h3'}>Input: </Box>
              <OutlinedInput   placeholder="Please enter text" value={input} onChange={(e) => setInput(e.target.value)} />
              <Box>
                <Box component={'h3'}>Output: </Box>
                {output == '' ? <Box component={'p'} pl={2} sx={{ userSelect: 'none', color: '#a1a1a1' }}>{'Not received information.'}</Box> : (<Box component={'p'} sx={{ userSelect: 'none' }} pl={2}>{output}</Box>)}
              </Box>

            </FormControl>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <Box component={'pre'} p={3} sx={{ overflow: 'auto' }}>
                <code>
                  {` const findArray = (s: string) => {
    let res = ''

    const substringFrom = (left: number, right: number) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      return s.slice(left + 1, right)
    }
    for (let i = 0; i < s.length; i++) {
      const sub1 = substringFrom(i, i);
      const sub2 = substringFrom(i, i + 1);
      const sub = sub1.length > sub2.length ? sub1 : sub2
      if (sub.length > res.length) {
        res = sub
      }
    }
    return res
  }`}
                </code>
              </Box>
            </Card>

          </Grid>
        </Grid>

      </Container>

    </>
  )
}

export default Home
