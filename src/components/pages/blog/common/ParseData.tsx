import dayjs from 'dayjs';

const ParseData = ({data}: {data: any}) => {
    const { sys, fields } = data;
    const { tags, authors, publishDate, slug, excerpt: excerptRaw, title, thumbnail, headerImage } = fields;
    const tag = tags[0].fields.name.toUpperCase();
    const authorName = authors[0].fields.name;
    const authorAvatar = authors[0].fields.avatar.fields.file.url;
    const thumbnailUrl = thumbnail.fields.file.url; 
    const thumbnailTitle = thumbnail.fields.title;
    const headerImageUrl = headerImage.fields.file.url; 
    const headerImageTitle = headerImage.fields.title;
    const pubDate = dayjs(publishDate).format("MMMM DD, YYYY");
    const excerpt = excerptRaw.length > 104 ? `${excerptRaw.substring(0,104)}...` : excerptRaw;

    return {
        id: sys.id, tag, authorName, authorAvatar, thumbnailUrl, slug, title,
        pubDate, headerImageUrl, excerpt, headerImageTitle, thumbnailTitle
    }
}

export default ParseData;