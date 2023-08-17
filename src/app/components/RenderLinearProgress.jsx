import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

export default function RenderLinearProgress() {
  const [progress, setProgress] = React.useState(0);

  const theme = createTheme({
    palette: {
      darkred: {
        main: '#FF0000'
      }
    }
  })


  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LinearProgress variant="determinate" value={progress} sx={{ background: '#000' }} color={"darkred"} />
    </ThemeProvider>
  );
}
