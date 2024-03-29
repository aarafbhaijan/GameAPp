import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "@mui/material";

const data = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = true } = props;

  return (
    <Container>
      <Grid
        container
        wrap="wrap"
        gap={6}
        className="flex flex-wrap md:gap-30 scroll-smooth max-h-fit justify-center md:p-5 "
      >
        {(loading ? Array.from(new Array(20)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 200, marginRight: 2.5, my: 5 }}>
            <Skeleton
              variant="rectangular"
              width={256}
              height={118}
              className="glass md:w-256 w-40 "
            />

            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" className="glass border-none" />
              <Skeleton width="30%" className="glass border-none" />
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

export default function YouTube() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
      <Media />
    </Box>
  );
}

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Skeleton from '@mui/material/Skeleton';

// interface MediaProps {
//   loading?: boolean;
// }

// function Media(props: MediaProps) {
//   const { loading = false } = props;

//   return (
//     <Card sx={{ maxWidth: 345, m: 2 }}>
//       <CardHeader
//         avatar={
//           loading ? (
//             <Skeleton animation="wave" variant="circular" width={40} height={40} />
//           ) : (
//             <Avatar
//               alt="Ted talk"
//               src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
//             />
//           )
//         }
//         action={
//           loading ? null : (
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           )
//         }
//         title={
//           loading ? (
//             <Skeleton
//               animation="wave"
//               height={10}
//               width="80%"
//               style={{ marginBottom: 6 }}
//             />
//           ) : (
//             'Ted'
//           )
//         }
//         subheader={
//           loading ? (
//             <Skeleton animation="wave" height={10} width="40%" />
//           ) : (
//             '5 hours ago'
//           )
//         }
//       />
//       {loading ? (
//         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
//       ) : (
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
//           alt="Nicola Sturgeon on a TED talk stage"
//         />
//       )}
//       <CardContent>
//         {loading ? (
//           <React.Fragment>
//             <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
//             <Skeleton animation="wave" height={10} width="80%" />
//           </React.Fragment>
//         ) : (
//           <Typography variant="body2" color="text.secondary" component="p">
//             {
//               "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
//             }
//           </Typography>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export default function Facebook() {
//   return (
//     <div>
//       <Media loading />
//       <Media />
//     </div>
//   );
// }
