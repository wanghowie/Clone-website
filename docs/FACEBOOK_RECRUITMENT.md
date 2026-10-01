# Facebook 招募本地人 — 文案与流程

目标：通过 Facebook 招募 Dauin 的 freelance 本地人（tricycle 司机、van/大巴司机、潜导、船家、瑜伽老师、导游），
引导他们到网站 `/join` 页面填表，或直接私信你。

> 正式域名是 **www.visitdauin.com**。帖子里写短的 `visitdauin.com` 更好记，会自动跳转到 www。把 `[你的名字]` 换成你自己的名字。
> 宿务语（Bisaya）版本是机器起草的，**发布前请让一位当地人检查一遍**。

---

## 1. 主招募帖（英文）

> 🌴 **Calling all Dauin locals! Get more customers — for FREE** 🌴
>
> Hi Dauin! I'm [你的名字] and I'm building **Visit Dauin** (visitdauin.com) — a free website that helps
> travellers find and message local people directly.
>
> Are you a…
> 🛺 Tricycle driver
> 🚐 Van or bus driver
> 🤿 Dive guide
> ⛵ Boatman (Apo Island trips, snorkelling, sunset rides)
> 🧘 Yoga teacher
> 🧭 Tour guide (hot springs, waterfalls, Mt. Talinis, markets)
>
> ✅ **Free to join** — no fees, no commission
> ✅ Travellers message you directly on **WhatsApp, Messenger or SMS**
> ✅ You agree the price and get paid **directly** — you keep 100%
> ✅ Your profile is in English, so backpackers and Filipino travellers can find you
>
> 👉 Sign up in 2 minutes: **visitdauin.com/join**
> or comment **"INTERESTED"** / send me a message and I'll help you set up your profile.
>
> Please share with friends and family who work in tourism in Dauin! 🙏

---

## 2. 主招募帖（Bisaya / 宿务语 — 需当地人校对）

> 🌴 **Mga taga-Dauin! Dugang customer — LIBRE** 🌴
>
> Hi Dauin! Ako si [你的名字] ug naghimo ko og **Visit Dauin** (visitdauin.com) — usa ka libre nga website
> diin ang mga turista makakita ug maka-message direkta sa mga lokal.
>
> Ikaw ba kay…
> 🛺 Tricycle driver
> 🚐 Van o bus driver
> 🤿 Dive guide
> ⛵ Bangkero (Apo Island, snorkeling, sunset)
> 🧘 Yoga teacher
> 🧭 Tour guide
>
> ✅ **Libre** — walay bayad, walay komisyon
> ✅ Ang turista mo-message nimo direkta sa **WhatsApp, Messenger o text**
> ✅ Ikaw ang mo-presyo ug ikaw ang bayran direkta
>
> 👉 Pag-sign up: **visitdauin.com/join**
> o mag-comment og **"INTERESADO"** / i-message ko.
>
> Palihug i-share sa imong mga higala! 🙏

---

## 3. 按类别的短帖（适合发在对应的群里或配图）

**Tricycle 司机**
> 🛺 Tricycle drivers in Dauin — tourists are looking for reliable rides to the beach, sanctuaries and Baslay
> Hot Spring. Get listed for free and let them message you directly. visitdauin.com/join

**Van / 大巴司机**
> 🚐 Van and bus drivers — get airport transfers and day-trip bookings (Oslob, Siquijor port, Bais, waterfalls)
> straight from travellers. Free listing, no commission. visitdauin.com/join

**潜导**
> 🤿 Freelance dive guides in Dauin — divers want a guide who can find the frogfish. Show your experience and
> languages on a free profile. visitdauin.com/join

**船家**
> ⛵ Bangkeros! Travellers want boats to Apo Island and sunset trips. List your boat for free — they contact you
> directly. visitdauin.com/join

**瑜伽老师**
> 🧘 Yoga teachers in Dauin — offer private and beach classes to travellers staying nearby. Free profile, no
> commission. visitdauin.com/join

**导游**
> 🧭 Local guides — hot springs, waterfalls, Mt. Talinis, Malatapay market. Let travellers find you.
> Free listing at visitdauin.com/join

---

## 4. 私信回复模板

**有人留言 "INTERESTED" 后：**
> Hi [名字]! Thanks for your interest in Visit Dauin 😊 To create your free profile I just need:
> 1. Your name (or the name travellers know you by)
> 2. What you offer (e.g. tricycle rides, Apo Island boat)
> 3. Your barangay
> 4. WhatsApp / mobile number for travellers to contact you
> 5. Languages you speak
> 6. Your usual services and prices (approximate is fine)
> 7. When you're available
> 8. A clear, friendly photo of you (and your tricycle / boat / van if you like)
>
> Or fill in the form here: visitdauin.com/join
> Is it OK if I publish your name, photo and number on the website so travellers can contact you?

**确认同意后：**
> Salamat! Your profile will be live in a few days. I'd love to meet you in person in Dauin to say hello —
> after that your profile gets a "Met in person" ✅ badge, which helps travellers trust you.

---

## 5. 在哪里发

- 在 Facebook 搜索并加入：Dauin、Dumaguete、Negros Oriental 相关的社区群、买卖群、旅游从业者群、
  tricycle / van 司机群、潜水从业者群（发帖前先看群规）。
- 你自己的 Visit Dauin Facebook 主页（置顶主招募帖）。
- 线下：在 Dauin 市场、码头、tricycle 等候点直接交谈，留一张印有二维码（链接到 `/join`）的小卡片。

---

## 6. 上线一位本地人的检查清单

- [ ] 已获得本人同意公开姓名、照片和联系方式
- [ ] 联系方式已测试（发一条 WhatsApp / 短信确认能收到）
- [ ] 服务和价格由本人确认
- [ ] 照片已放到 `public/images/locals/`
- [ ] 资料已添加到 `src/data/locals.ts`（`isExample` 不要设置）
- [ ] 见过面后再设 `verified: true`
- [ ] 第一批真实本地人上线后，把 `src/data/site.ts` 里的 `showExampleLocals` 改为 `false`

## 7. 引流追踪小技巧

游客通过网站发出的消息都以 **"Hi [名字]! I found you on Visit Dauin."** 开头。
请本地人每月告诉你收到几条这样的消息、成交几单 —— 这是你衡量平台价值、日后谈合作的关键数据。
