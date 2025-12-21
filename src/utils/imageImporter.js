// Utility to dynamically import images
export const importImage = (imagePath) => {
  try {
    // Normalize the path
    let normalizedPath = imagePath;

    // Remove leading slash if present
    if (normalizedPath.startsWith('/')) {
      normalizedPath = normalizedPath.slice(1);
    }

    // Strip 'src/' prefix if present to make it relative to src root
    // Since this file is in src/utils, we need to go up one level (../) to get to src/
    if (normalizedPath.startsWith('src/')) {
      normalizedPath = normalizedPath.replace('src/', '');
    }

    // Now normalizedPath should be 'assets/...' or similar
    // We append it to '../' to step out of 'utils/' and into 'src/'
    return new URL(`../${normalizedPath}`, import.meta.url).href;
  } catch (err) {
    console.error(`Failed to import image: ${imagePath}`, err);
    return null;
  }
};

// Comprehensive image map for all project images and screenshots
export const imageMap = {
  // App Projects
  'src/assets/images/BasitsanitaryAppmain.jpg': new URL('../assets/images/BasitsanitaryAppmain.jpg', import.meta.url).href,
  'src/assets/images/lotteryappmain.jpg': new URL('../assets/images/lotteryappmain.jpg', import.meta.url).href,
  'src/assets/images/Electropakmain.jpg': new URL('../assets/images/Electropakmain.jpg', import.meta.url).href,
  'src/assets/images/mechifymain.jpg': new URL('../assets/images/mechifymain.jpg', import.meta.url).href,
  'src/assets/images/picnovaoldversion.jpg': new URL('../assets/images/picnovaoldversion.jpg', import.meta.url).href,
  'src/assets/images/web2.PNG': new URL('../assets/images/web2.PNG', import.meta.url).href,

  // Website Projects
  'src/assets/images/web1.PNG': new URL('../assets/images/web1.PNG', import.meta.url).href,
  'src/assets/images/web3.PNG': new URL('../assets/images/web3.PNG', import.meta.url).href,
  'src/assets/images/web4.PNG': new URL('../assets/images/web4.PNG', import.meta.url).href,
  'src/assets/images/web5.PNG': new URL('../assets/images/web5.PNG', import.meta.url).href,
  'src/assets/images/web6.PNG': new URL('../assets/images/web6.PNG', import.meta.url).href,
  'src/assets/images/web7.PNG': new URL('../assets/images/web7.PNG', import.meta.url).href,
  'src/assets/images/shadowsuit.PNG': new URL('../assets/images/shadowsuit.PNG', import.meta.url).href,

  // Tech Stack Images
  'src/assets/images/html.png': new URL('../assets/images/html.png', import.meta.url).href,
  'src/assets/images/css.png': new URL('../assets/images/css.png', import.meta.url).href,
  'src/assets/images/tailwind.png': new URL('../assets/images/tailwind.png', import.meta.url).href,
  'src/assets/images/JS.png': new URL('../assets/images/JS.png', import.meta.url).href,
  'src/assets/images/react.png': new URL('../assets/images/react.png', import.meta.url).href,
  'src/assets/images/reactnative.png': new URL('../assets/images/reactnative.png', import.meta.url).href,
  'src/assets/images/Node.png': new URL('../assets/images/Node.png', import.meta.url).href,
  'src/assets/images/express.png': new URL('../assets/images/express.png', import.meta.url).href,
  'src/assets/images/mysql.png': new URL('../assets/images/mysql.png', import.meta.url).href,
  'src/assets/images/firebase.png': new URL('../assets/images/firebase.png', import.meta.url).href,
  'src/assets/images/mongodb.png': new URL('../assets/images/mongodb.png', import.meta.url).href,

  // Background Images
  'src/assets/images/bg_1.jpg': new URL('../assets/images/bg_1.jpg', import.meta.url).href,
  'src/assets/images/bg2.png': new URL('../assets/images/bg2.png', import.meta.url).href,

  // App Screenshots - Basit Sanitary App
  'src/assets/images/basitsanitaryapp/1.png': new URL('../assets/images/basitsanitaryapp/1.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/2.png': new URL('../assets/images/basitsanitaryapp/2.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/3.png': new URL('../assets/images/basitsanitaryapp/3.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/4.png': new URL('../assets/images/basitsanitaryapp/4.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/5.png': new URL('../assets/images/basitsanitaryapp/5.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/6.png': new URL('../assets/images/basitsanitaryapp/6.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/7.png': new URL('../assets/images/basitsanitaryapp/7.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/8.png': new URL('../assets/images/basitsanitaryapp/8.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/9.png': new URL('../assets/images/basitsanitaryapp/9.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/10.png': new URL('../assets/images/basitsanitaryapp/10.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/11.png': new URL('../assets/images/basitsanitaryapp/11.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/12.png': new URL('../assets/images/basitsanitaryapp/12.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/13.png': new URL('../assets/images/basitsanitaryapp/13.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/14.png': new URL('../assets/images/basitsanitaryapp/14.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/15.png': new URL('../assets/images/basitsanitaryapp/15.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/16.png': new URL('../assets/images/basitsanitaryapp/16.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/17.png': new URL('../assets/images/basitsanitaryapp/17.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/18.png': new URL('../assets/images/basitsanitaryapp/18.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/19.png': new URL('../assets/images/basitsanitaryapp/19.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/20.png': new URL('../assets/images/basitsanitaryapp/20.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/21.png': new URL('../assets/images/basitsanitaryapp/21.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/22.png': new URL('../assets/images/basitsanitaryapp/22.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/23.png': new URL('../assets/images/basitsanitaryapp/23.png', import.meta.url).href,
  'src/assets/images/basitsanitaryapp/24.png': new URL('../assets/images/basitsanitaryapp/24.png', import.meta.url).href,

  // Lottery App Screenshots
  'src/assets/images/lottery/home.png': new URL('../assets/images/lottery/home.png', import.meta.url).href,
  'src/assets/images/lottery/game-board.png': new URL('../assets/images/lottery/game-board.png', import.meta.url).href,
  'src/assets/images/lottery/wallet.png': new URL('../assets/images/lottery/wallet.png', import.meta.url).href,
  'src/assets/images/lottery/winner-popup.png': new URL('../assets/images/lottery/winner-popup.png', import.meta.url).href,
  'src/assets/images/lottery/history.png': new URL('../assets/images/lottery/history.png', import.meta.url).href,

  // ElectroPak Screenshots
  'src/assets/images/electropak/home.png': new URL('../assets/images/electropak/home.png', import.meta.url).href,
  'src/assets/images/electropak/products.png': new URL('../assets/images/electropak/products.png', import.meta.url).href,
  'src/assets/images/electropak/cart.png': new URL('../assets/images/electropak/cart.png', import.meta.url).href,
  'src/assets/images/electropak/services.png': new URL('../assets/images/electropak/services.png', import.meta.url).href,
  'src/assets/images/electropak/profile.png': new URL('../assets/images/electropak/profile.png', import.meta.url).href,

  // Mechify Screenshots
  'src/assets/images/mechify/home.png': new URL('../assets/images/mechify/home.png', import.meta.url).href,
  'src/assets/images/mechify/products.png': new URL('../assets/images/mechify/products.png', import.meta.url).href,
  'src/assets/images/mechify/cart.png': new URL('../assets/images/mechify/cart.png', import.meta.url).href,
  'src/assets/images/mechify/map.png': new URL('../assets/images/mechify/map.png', import.meta.url).href,
  'src/assets/images/mechify/technician-profile.png': new URL('../assets/images/mechify/technician-profile.png', import.meta.url).href,

  // PicNova Screenshots
  'src/assets/images/picnova/editor.png': new URL('../assets/images/picnova/editor.png', import.meta.url).href,
  'src/assets/images/picnova/ai-filters.png': new URL('../assets/images/picnova/ai-filters.png', import.meta.url).href,
  'src/assets/images/picnova/background-removal.png': new URL('../assets/images/picnova/background-removal.png', import.meta.url).href,
  'src/assets/images/picnova/video-effects.png': new URL('../assets/images/picnova/video-effects.png', import.meta.url).href,
  'src/assets/images/picnova/profile.png': new URL('../assets/images/picnova/profile.png', import.meta.url).href,

  // Videos
  'src/assets/videos/BasitSanitaryAppDashboard.mp4': new URL('../assets/videos/BasitSanitaryAppDashboard.mp4', import.meta.url).href,
  'src/assets/videos/abcd.mp4': new URL('../assets/videos/abcd.mp4', import.meta.url).href,
  'src/assets/videos/Basitsanitarydashboard.mp4': new URL('../assets/videos/Basitsanitarydashboard.mp4', import.meta.url).href,
  'src/assets/videos/Elctropakuserside.mp4': new URL('../assets/videos/Elctropakuserside.mp4', import.meta.url).href,
  'src/assets/videos/Mechifyuserside.mp4': new URL('../assets/videos/Mechifyuserside.mp4', import.meta.url).href,
  'src/assets/videos/electropakadmin.mp4': new URL('../assets/videos/electropakadmin.mp4', import.meta.url).href,
  'src/assets/videos/ElectropakElectrician.mp4': new URL('../assets/videos/ElectropakElectrician.mp4', import.meta.url).href,
  'src/assets/videos/picnova.mp4': new URL('../assets/videos/picnova.mp4', import.meta.url).href,
  'src/assets/videos/PortfolioVideo.mp4': new URL('../assets/videos/PortfolioVideo.mp4', import.meta.url).href,
};

export const getImageUrl = (imagePath) => {
  if (!imagePath) return null;

  // If it's an absolute URL (http:// or https://), return it as-is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // Normalize path - remove leading slashes
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;

  // If it's in our map, use the mapped version
  if (imageMap[normalizedPath]) {
    return imageMap[normalizedPath];
  }

  // Otherwise try to import it dynamically
  return importImage(normalizedPath);
};
