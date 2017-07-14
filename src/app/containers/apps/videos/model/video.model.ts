export interface GoogleApiYouTubeThumbnailItemResource {
    /**
     * The images URL.
     */
    url: string;
    /**
     * The images width.
     */
    width: number;
    /**
     * The images height.
     */
    height: number;
}


export interface GoogleApiYouTubeVideoResource {
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    id: string;
    /**
     * The type of the API resource. For video resources, the value will be youtube#video.
     */
    kind: string;
    /**
     * The ETag of the video resource.
     */
    etag: string;
    /**
     * The snippet object contains basic details about the video, such as its title, description, and category.
     */
    snippet: {
        /**
         * The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string;
        /**
         * The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
         */
        channelId: string;
        /**
         * The videos title.
         */
        title: string;
        /**
         * The videos description.
         */
        description: string;
        /**
         * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: GoogleApiYouTubeThumbnailItemResource[];
        /**
         * Channel title for the channel that the video belongs to.
         */
        channelTitle: string;
        /**
         * A list of keyword tags associated with the video. Tags may contain spaces. This field is only visible to the videos uploader.
         */
        tags: string[];
        /**
         * The YouTube video category associated with the video.
         */
        categoryId: string;
    }
    /**
     * The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.
     */
    contentDetails: {
        /**
         * The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video.
         */
        duration: string;
        /**
         * Indicates whether the video is available in 3D or in 2D.
         */
        dimension: string;
        /**
         * Indicates whether the video is available in high definition (HD) or only in standard definition.
         */
        definition: string;
        /**
         * Indicates whether captions are available for the video.
         */
        caption: string;
        /**
         * Indicates whether the video represents licensed content, which means that the content has been claimed by a YouTube content partner.
         */
        licensedContent: boolean;
        /**
         * The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property.
         */
        regionRestriction: {
            /**
             * A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.
             */
            allowed: string[];
            /**
             * A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.

             */
            blocked: string[];
        }
        /**
         * Specifies the ratings that the video received under various rating schemes.
         */
        contentRating: {
            /**
             * The videos Motion Picture Association of America (MPAA) rating.
             */
            mpaaRating: string;
            /**
             * The videos TV Parental Guidelines (TVPG) rating.
             */
            tvpgRating: string;
            /**
             * The videos British Board of Film Classification (BBFC) rating.
             */
            bbfcRating: string;
            /**
             * The videos Canadian Home Video Rating System (CHVRS) rating.
             */
            chvrsRating: string;
            /**
             * The videos Eirin rating. Eirin is the Japanese rating system.
             */
            eirinRating: string;
            /**
             * The videos Central Board of Film Certification (CBFC - India) rating.
             */
            cbfcRating: string;
            /**
             * The videos Centre national du cinéma et de limage animé (French Ministry of Culture) rating.
             */
            fmocRating: string;
            /**
             * The videos Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.
             */
            icaaRating: string;
            /**
             * The videos Australian Classification Board (ACB) rating.
             */
            acbRating: string;
            /**
             * The videos Office of Film and Literature Classification (OFLC - New Zealand) rating.
             */
            oflcRating: string;
            /**
             * The videos Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.
             */
            fskRating: string;
            /**
             * The videos Korea Media Rating Board rating. The KMRB rates videos in South Korea.
             */
            kmrbRating: string;
            /**
             * The videos Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.
             */
            djctqRating: string;
            /**
             * The videos National Film Registry of the Russian Federation (MKRF - Russia) rating.
             */
            russiaRating: string;
            /**
             * The videos General Directorate of Radio, Television and Cinematography (Mexico) rating.
             */
            rtcRating: string;
        }
    }
    /**
     * The player object contains information that you would use to play the video in an embedded player.
     */
    player: {
        /**
         * An <iframe> tag that embeds a player that will play the video.
         */
        embedHtml: string;
    }
    /**
     * The statistics object contains statistics about the video.
     */
    statistics: {
        /**
         * The number of times the video has been viewed.
         */
        viewCount: number;
        /**
         * The number of users who have indicated that they liked the video by giving it a positive rating.
         */
        likeCount: number;
        /**
         * The number of users who have indicated that they disliked the video by giving it a negative rating.
         */
        dislikeCount: number;
        /**
         * The number of users who currently have the video marked as a favorite video.
         */
        favoriteCount: number;
        /**
         * The number of comments for the video.
         */
        commentCount: number;
    }
    /**
     * The status object contains information about the videos uploading, processing, and privacy statuses.
     */
    status: {
        /**
         * The status of the uploaded video.
         */
        uploadStatus: string;
        /**
         * This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
         */
        failureReason: string;
        /**
         * This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.
         */
        rejectionReason: string;
        /**
         * The videos privacy status.
         */
        privacyStatus: string;
        /**
         * The videos license.
         */
        license: string;
        /**
         * This value indicates whether the video can be embedded on another website.

         */
        embeddable: boolean;
        /**
         * This value indicates whether the extended video statistics on the videos watch page are publicly viewable. By default, those statistics are viewable, and statistics like a videos viewcount and ratings will still be publicly visible even if this propertys value is set to false.
         */
        publicStatsViewable: boolean;
    }
    /**
     * The topicDetails object encapsulates information about Freebase topics associated with the video.
     */
    topicDetails: {
        /**
         * A list of Freebase topic IDs associated with the video. You can retrieve information about each topic using the Freebase Topic API.
         */
        topicIds: string[];
    }
    /**
     * The recordingDetails object encapsulates information about the location, date and address where the video was recorded. This object will only be returned for a video if the videos geolocation data or recording time has been set.
     */
    recordingDetails: {
        /**
         * The geolocation information associated with the video.
         */
        location: {
            /**
             * Latitude in degrees.
             */
            latitude: number;
            /**
             * Longitude in degrees.
             */
            longitude: number;
            /**
             * Altitude above the WGS 84 reference ellipsoid, in meters.
             */
            elevation: number;
        }
        /**
         * The text description of the location where the video was recorded.
         */
        locationDescription: string;
        /**
         * The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        recordingDate: string;
    }
    /**
     * The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the files resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.
     */
    fileDetails: {
        /**
         * The uploaded files name. This field is present whether a video file or another type of file was uploaded.
         */
        fileName: string;
        /**
         * The uploaded files size in bytes. This field is present whether a video file or another type of file was uploaded.
         */
        fileSize: number;
        /**
         * The uploaded files type as detected by YouTubes video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
         */
        fileType: string;
        /**
         * The uploaded video files container format.
         */
        container: string;
        /**
         * A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.
         */
        videoStreams: {
            /**
             * The encoded video contents width in pixels.
             */
            widthPixels: number;
            /**
             * The encoded video contents height in pixels.
             */
            heightPixels: number;
            /**
             * The video streams frame rate, in frames per second.
             */
            frameRateFps: number;
            /**
             * The video contents display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
             */
            aspectRatio: number;
            /**
             * The video codec that the stream uses.
             */
            codec: string;
            /**
             * The video streams bitrate, in bits per second.
             */
            bitrateBps: number;
            /**
             * The amount that YouTube needs to rotate the original source content to properly display the video.
             */
            rotation: string;
            /**
             * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
             */
            vender: string;
        }[];
        /**
         * A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.
         */
        audioStreams: {
            /**
             * The number of audio channels that the stream contains.
             */
            channelCount: number;
            /**
             * The audio codec that the stream uses.
             */
            codec: string;
            /**
             * The audio streams bitrate, in bits per second.
             */
            bitrateBps: number;
            /**
             * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
             */
            vendor: string;
        }[];
        /**
         * The length of the uploaded video in milliseconds.
         */
        durationMs: number;
        /**
         * The uploaded video files combined (video and audio) bitrate in bits per second.
         */
        bitrateBps: number;
        /**
         * Geographic coordinates that identify the place where the uploaded video was recorded. Coordinates are defined using WGS 84.
         */
        recordingLocation: {
            /**
             * Latitude in degrees.
             */
            latitude: number;
            /**
             * Longitude in degrees.
             */
            longitude: number;
            /**
             * Altitude above the WGS 84 reference ellipsoid, in meters.
             */
            elevation: number;
        }
        /**
         * The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported:
         */
        creationTime: string;
    }
    /**
     * The processingProgress object encapsulates information about YouTubes progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video.
     * The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.
     */
    processingDetails: {
        /**
         * The videos processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
         */
        processingStatus: string;
        /**
         * The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the videos processing status is processing.
         */
        processingProgress: {
            /**
             * An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.
             */
            partsTotal: number;
            /**
             * The number of parts of the video that YouTube has already processed.
             */
            partsProcessed: number;
            /**
             * An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.
             */
            timeLeftMs: number;
        }
        processingFailureReason: string;
        /**
         * The reason that YouTube failed to process the video. This property will only have a value if the processingStatus propertys value is failed.
         */
        fileDetailsAvailability: string;
        /**
         * This value indicates whether file details are available for the uploaded video. You can retrieve a videos file details by requesting the fileDetails part in your videos.list() request.
         */
        processingIssuesAvailability: string;
        /**
         * This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a videos metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
         */
        tagSuggestionsAvailability: string;
        /**
         * This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
         */
        editorSuggestionsAvailability: string;
        /**
         * This value indicates whether thumbnail images have been generated for the video.
         */
        thumbnailsAvailability: string;
    }
    /**
     * The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.
     */
    suggestions: {
        /**
         * A list of errors that will prevent YouTube from successfully processing the uploaded video. These errors indicate that, regardless of the videos current processing status, eventually, that status will almost certainly be failed.
         */
        processingErrors: string[];
        /**
         * A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that do not necessarily indicate that video processing will fail but that still might cause problems such as sync issues, video artifacts, or a missing audio track.
         */
        processingWarnings: string[];
        /**
         * A list of suggestions that may improve YouTubes ability to process the video.
         */
        processingHints: string[];
        /**
         * A list of keyword tags that could be added to the videos metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.
         */
        tagSuggestions: {
            /**
             * The keyword tag suggested for the video.
             */
            tag: string;
            /**
             * A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.
             */
            categoryRestricts: string[];
        }[];
        /**
         * A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
         */
        editorSuggestions: string[];
    }

}