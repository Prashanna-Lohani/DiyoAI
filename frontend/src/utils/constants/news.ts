import type { StaticImageData } from 'next/image';

import DainikLogo from '@/assets/images/dainik.png';
import KantipurLogo from '@/assets/images/kantipur.png';
import SetopatiLogo from '@/assets/images/setopati.png';

export type NewsArticle = {
  logo: StaticImageData;
  outlet: string;
  title: string;
  href: string;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    logo: KantipurLogo,
    outlet: 'Kantipur',
    title: 'अन्तर्क्रियाविहीन सरकारी वेबसाइट',
    href: 'https://ekantipur.com/business/2021/12/05/163867313030279426.html',
  },
  {
    logo: SetopatiLogo,
    outlet: 'Setopati',
    title: "पाँच नेपाली वैज्ञानिकले बनाएको गफ गर्ने रोबोट साथी 'गोलु'",
    href: 'https://www.setopati.com/kinmel/business/242214',
  },
  {
    logo: DainikLogo,
    outlet: 'Dainik Patra',
    title: 'उपमहानगरले ल्यओ ऐआई च्याटबट',
    href: 'https://www.dainikpatra.com/epaper/2023/07/09/%e0%a4%a6%e0%a5%88%e0%a4%a8%e0%a4%bf%e0%a4%95-%e0%a4%aa%e0%a4%a4%e0%a5%8d%e0%a4%b0-%e0%a4%b0%e0%a4%be%e0%a4%b7%e0%a5%8d%e0%a4%9f%e0%a5%8d%e0%a4%b0%e0%a4%bf%e0%a4%af-%e0%a4%a6%e0%a5%88%e0%a4%a8-870/',
  },
  {
    logo: KantipurLogo,
    outlet: 'Kantipur',
    title: 'एआईबाट सूचना प्रवाहबारे पालिकाको चासो',
    href: 'https://ekantipur.com/business/2023/05/21/168463111687639307.html',
  },
];
