import {Link} from 'react-router-dom';

import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import {CheckCircle} from '@mui/icons-material';

import { demoChannelTitle, demoChannelUrl, demoVideoTitle,
demoVideoUrl, demoThumbnailUrl } from '../utils/constants';


// md stands for medium devices, and xs is extra small devices

const VideoCard = ({video: {id: {videoId}, snippet }}) => {
    return (
        <Card sx={{width: {xs: '100%', md: '320px'}, boxShadow: 'none', borderRadius: 0}}>
            {/* LINK Tag has property to={} to check if videoId exist then go to that link,
            otherwise, just access that default url */}
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width: {
                        xs: '100%', sm: '358px', md: '320px'
                    }, height: 180}}
                />
            </Link>

            <CardContent
                sx={{
                    backgroundColor: '#1e1e1e', 
                    height: '105px'
                }}>
                    <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                            {/** Set title slice contains max 60 characters. If no title, set demo title for videos */}
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </Link>

                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                        <Typography variant="subtitle2" fontWeight="bold" color="gray">
                            {/** Set title slice contains max 60 characters. If no title, set demo title for videos */}
                            {snippet?.channelTitle || demoVideoTitle}
                            <CheckCircle sx={{
                                fontSize: 12,
                                color: 'gray',
                                ml: '5px'
                            }} /> 
                        </Typography>
                    </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard