import { processImageFile } from '../utils/imageProcessor';
import bubbleImage from '../assets/bubble-sheet.jpg';

export const generateBubbleImageWithBlackBackground = async (): Promise<void> => {
  try {
    console.log('Processing bubble sheet image...');
    
    // Process the image
    const processedBlob = await processImageFile(bubbleImage);
    
    // Create download link
    const url = URL.createObjectURL(processedBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bubble-sheet-black-bg.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    console.log('Processed image downloaded successfully!');
  } catch (error) {
    console.error('Error processing bubble image:', error);
  }
};