import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    title: "বিজিসি ট্রাস্ট ইউনিভার্সিটির আইটি ক্লাবের নতুন কমিটির অভিষেক",
    image: "/images/news/banglanews24installnation.jpg",
    publishedAt: "21-Dec-2024",
    source: "Bangla News 24",
    sourceUrl: "https://banglanews24.com/daily-chittagong/news/bd/1443343.details",
    description: "চট্টগ্রাম: বিজিসি ট্রাস্ট ইউনিভার্সিটি বাংলাদেশের ইনফরমেশান টেকনোলজি ক্লাবের নব গঠিত কমিটির অভিষেক অনুষ্ঠান অনুষ্ঠিত হয়েছে। এতে প্রধান অতিথি ছিলেন বিজিসি ট্রাস্ট ইউনিভার্সিটি বাংলাদেশের উপাচার্য অধ্যাপক ড. এ.এফ.এম আওরঙ্গজেব, বিশেষ অতিথি ছিলেন বিশ্ববিদ্যালয়ের ভারপ্রাপ্ত রেজিষ্ট্রার ড. এস.এম শোয়েব। অনুষ্ঠানে উপাচার্য অধ্যাপক ড. এ.এফ.এম আওরঙ্গজেব বলেন, তথ্য প্রযুক্তিখাত বর্তমান সময়ে পৃথিবীর চালিকা শক্তি। বিশ্বের সাথে তাল মিলিয়ে আমাদের শিক্ষার্থীদের প্রযুক্তিগত দক্ষতা অর্জনের মাধ্যমে দেশ ও বিশ্বের উন্নয়নে ভূমিকা রাখতে হবে। বিজিসি ট্রাস্ট ইউনিভার্সিটি কর্তৃপক্ষ ৪র্থ শিল্প বিপ্লবের উপযোগী গ্র্যাজুয়েট তৈরী করার জন্য প্রতিনিয়ত সময়োপযোগী বিভিন্ন কার্যক্রম পরিচালনা করছেন। আইটি ক্লাবের সদস্য শাহরিয়ার সায়মাল ও সৈয়দা তাশনিয়া তাবাস্সুমের সঞ্চালনায় ও ক্লাবের প্রধান উপদেষ্টা কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগের চেয়ারম্যান মো. সালাউডিদ্দন চৌধুরীর সভাপতিত্ত্বে অনুষ্ঠানে স্বাগত বক্তব্য দেন আইটি ক্লাবে উপদেষ্টা ব্যবসায় প্রশাসন বিভাগের শিক্ষক ফারহানা নাসরিন। এসময় আরও উপস্থিত ছিলেন বিশ্ববিদ্যালয়ের ডেপুটি রেজিষ্ট্রার সালাহউদ্দিন শাহরিয়ার, আইটি ক্লাবের উপদেষ্টা ইংরেজী বিভাগের শিক্ষক মো. ইমরান চৌধুরী, আইন বিভাগের শিক্ষক তওহিদুল ইসলাম জিহাদী, জার্নালিজম অ্যান্ড মিডিয়া স্ট্যাডিজ বিভাগের শিক্ষক সরোয়ার কামাল, কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং বিভাগের শিক্ষক রিজোয়ানা হক ও ফার্মেসী বিভাগের শিক্ষক কাজী সানজিদা তাহরিম প্রমুখ। পরে ইনফরমেশান টেকনোলজি ক্লাবের সভাপতি-সাধারণ সম্পাদব সহ কমিটির অন্যান্য সদস্যদের শপথ বাক্য পাঠ করার বিশ্ববিদ্যালয় উপাচার্য। বাংলাদেশ সময়: ১৩২৯ ঘণ্টা, ডিসেম্বর ২১, ২০২৪ এমআর/টিসি",
  },
  {
    title: "BGCTUB IT Club launched",
    image: "/images/news/ailymessengerinstallnation.jpg",
    publishedAt: "20-Dec-2024",
    source: "The Daily Messenger",
    sourceUrl: "https://www.dailymessenger.net/education/news/29831",
    description: "The BGCTUB IT Club was officially launched on Thursday at a ceremony in the university's IQAC conference hall aiming to boost education and technological innovation. Professor Dr. A.F.M Aowrangazab, vice-chancellor of BGC Trust University Bangladesh, addressed the inaugural programme as the chief guest. Registrar-in-charge Dr. S.M. Shoaib, and deputy registrar Salahuddin Shahriar joined the ceremony as special guests while Mohammad Salah Uddin Chowdhury, chief adviser of the BGCTUB IT Club and  chairman of the CSE department, presided over the event. Chief guest Professor Dr. A.F.M Aowrangazab said “Students must develop technological skills to contribute to the nation's progress. The BGCTUB IT Club will play a important role in achieving this.” The programme was hosted by Shahriar Faisal and Syeda Tasfia Tabassum and attended by advisers, and students from different departments. The BGCTUB IT Club also introduced its leadership team in the inaugural: Md Rahat Ibne Sattar made president while Meheraj Moazzem as vice-president, Asrar Kawsain Tahmid as general secretary, A.K.M Fahim Chowdhury as treasurer and Sayem Mannan as organizing secretary. The BGCTUB IT Club aimed to equip students with advanced IT skills, promote research, and encourage innovation. It is expected to play a key role in preparing students to excel in the global technology industry.",
  },
  
]

export default function NewsPage() {
  return (
    <div className="container py-12 min-h-screen">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
          News Coverage
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Media coverage and achievements of BGCTUB IT Club
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {newsItems.map((item, index) => (
          <Card key={index} className="overflow-hidden border-0 bg-white dark:bg-black/40 shadow-none backdrop-blur-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index < 2}
              />
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Published on: {new Date(item.publishedAt).toLocaleDateString()}</span>
                <Link 
                  href={item.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Source: {item.source}
                </Link>
              </div>
              
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                {item.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 