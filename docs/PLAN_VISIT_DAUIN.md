# Visit Dauin — 项目规划

> 目标：做一个面向游客的 Dauin（菲律宾 Negros Oriental 省）一站式旅游平台——
> 既是**目的地指南**（了解 Dauin、搜索活动、查实用资料），
> 更是**连接平台**（让游客直接联系并预订当地向导、船家、潜店、民宿、厨师等本地人）。

---

## 0. 已确定的决策（2026-10）

| 问题 | 决定 |
|---|---|
| 目标客群 | 欧美背包客 + 菲律宾国内游客 |
| 语言 | 英文为主（暂不做多语言） |
| 第一阶段 | 只做引流 + 直接联系，**不做支付、不做账号** |
| 本地人来源 | 通过 Facebook 招募 freelance：tricycle 司机、van/大巴司机、潜导、船家、瑜伽老师、导游 |
| 内容 | 当地主要玩法 + 餐厅 + 住宿信息 |
| 仓库 | 已由克隆模板改造为 Visit Dauin 项目 |

**阶段 1 已实现：** 首页、玩法列表 / 详情、本地人目录 / 档案（询单消息生成器 → WhatsApp / Messenger / SMS）、
餐厅、住宿、行前须知、本地人招募页（表单 → 发给运营者）、全站搜索、sitemap / robots。
数据暂存于 `src/data/*.ts`，本地人档案目前是带 "Example" 标记的示例。

---

## 1. 定位与核心价值

| 对象 | 痛点 | 我们提供 |
|---|---|---|
| 游客 | 信息零散（FB 群、博客、潜店官网各说各话）；找不到靠谱的本地人；不知道价格是否合理 | 一个网站看完所有信息 + 可信的本地人档案 + 直接沟通 |
| 本地人 / 小商家 | 没有网站、只靠 Facebook 和口碑；被大平台抽佣高或根本上不去 | 免费/低成本上架、多语言展示、收到询单 |
| 当地政府 / 社区（长期） | 旅游收入流向外地；环保压力 | 推广负责任旅游、海洋保护区规则、社区项目 |

**一句话定位：** "The local way to experience Dauin" —— 本地人带你玩 Dauin。

**差异化：** TripAdvisor / Klook / Booking 覆盖的是有规模的商家；我们覆盖的是它们覆盖不到的**个体本地人**（渔民船家、自由潜导、家庭厨房、摩托司机、手工艺人），并做深度本地内容。

---

## 2. 用户角色

1. **游客（Traveler）** — 浏览、搜索、收藏、提问、预订、评价。无需注册即可浏览，联系/预订时再注册。
2. **本地主人（Local Host）** — 个人或小商家，创建档案、发布体验/服务、回复消息、管理日程。
3. **管理员（Admin）** — 审核主人资质、审核内容、处理纠纷、编辑指南文章。
4. **（后期）合作伙伴** — 度假村、潜店、LGU 旅游办公室，可批量管理多个服务。

---

## 3. 内容与功能模块

### 3.1 目的地指南（内容层 — SEO 流量的来源）

- **关于 Dauin**：历史、文化、地理、各 barangay 简介、最佳旅行季节、天气
- **必做清单**：
  - 潜水 / 浮潜：Dauin 是著名的 **muck diving（微距潜）** 圣地，海岸线有多个海洋保护区（Masaplod Norte / Sur 等）
  - **Apo Island**（行政上属于 Dauin）：海龟、珊瑚礁
  - 黑沙滩、日落
  - 山区：温泉（Baslay 一带）、瀑布、Mt. Talinis 徒步
  - 历史建筑：St. Nicholas of Tolentino 教堂、西班牙时期瞭望塔遗址
  - 周边一日游：Dumaguete、Zamboanguita 的 Malatapay 周三集市、Siquijor 等
- **实用信息**：交通（Dumaguete 机场 / 码头 → Dauin 的方式和大致价格）、ATM 与支付（现金 / GCash）、网络与 SIM 卡、医疗、安全、签证、海洋保护区门票与潜水费、环保规则
- **行程模板**：3 日潜水行程、5 日家庭游、背包客预算游……可一键"复制到我的行程"
- **活动日历**：节庆（镇庆 fiesta 等）、集市日、潮汐 / 最佳潜水时间
- **地图**：所有景点、潜点、主人、住宿、餐厅在同一张地图上

> ⚠️ 所有具体价格、门票、营业时间必须实地 / 向 LGU 核实后再上线，并标注"最后核实日期"。

### 3.2 搜索与发现

- 全站搜索（景点 / 体验 / 主人 / 文章）
- 筛选：分类（潜水、自然、文化、美食、交通、住宿…）、价格、时长、语言、是否适合儿童、日期可用性
- 排序：推荐、评分、价格、距离
- 地图视图 ↔ 列表视图切换

### 3.3 本地人连接平台（核心差异化）

**主人档案（Host Profile）**
- 头像、真实故事（"我在 Dauin 当了 20 年渔民…"）、会说的语言、所在 barangay
- 认证徽章：身份已验证 / DOT 认证 / 潜水教练证书（PADI/SSI）/ LGU 营业执照
- 提供的服务列表、评价、回复率与平均回复时间

**服务类型（Listings）**
- 体验：浮潜导游、船游 Apo Island、钓鱼、做饭课、椰子 / 手工艺体验、徒步向导
- 服务：接送（摩托 / tricycle / 包车）、潜水套餐、洗衣、摄影
- 住宿：民宿 / homestay（初期可只做展示 + 外链，减少复杂度）

**连接方式（分阶段）**
- MVP：**询单表单 + 一键跳转 WhatsApp / Facebook Messenger / Viber**（菲律宾本地人最常用 Messenger，门槛最低）
- 阶段 2：站内消息（保留沟通记录、便于纠纷处理、自动翻译）
- 阶段 3：在线预订 + 支付（定金 / 全款），平台抽佣

**信任与安全**
- 主人入驻需人工审核（线下见面最好）
- 双向评价（游客评主人、主人评游客）
- 明确取消政策、安全须知（潜水 / 船只 / 天气）
- 举报与纠纷处理流程

### 3.4 游客个人空间

- 收藏夹、我的行程（拖拽式行程规划器，可导出 / 分享）
- 我的询单 / 预订 / 消息
- 写评价、上传照片

### 3.5 主人后台

- 编辑档案与服务、上传照片
- 日历（可用 / 不可用）
- 询单与消息收件箱（**移动端优先**——本地人几乎只用手机）
- 收入统计（阶段 3）
- 提醒推送：邮件 + 短信 / Messenger（很多主人不常看邮件）

### 3.6 管理后台

- 主人审核队列、内容审核、评价审核
- 指南文章 CMS
- 数据看板：访问量、询单量、转化率、热门体验

---

## 4. 信息架构（路由草案）

```
/                         首页：Hero + 搜索框 + 热门体验 + 认识本地人 + 指南精选
/about-dauin              关于 Dauin
/guide                    指南文章列表
/guide/[slug]             文章详情
/things-to-do             所有体验（搜索 / 筛选 / 地图）
/things-to-do/[category]  分类页（diving、nature、culture、food…）
/experiences/[slug]       体验详情（照片、介绍、价格、主人、评价、询单 / 预订按钮）
/locals                   本地人列表
/locals/[slug]            主人档案
/places/[slug]            景点 / 潜点详情
/map                      全屏地图
/itineraries              行程模板
/events                   活动日历
/plan                     实用信息（交通、支付、安全…）
/account/*                游客个人空间
/host/*                   主人后台
/admin/*                  管理后台
/become-a-host            主人招募页
```

多语言：`/en`（默认）、`/zh`、`/ko`（韩国潜水客很多），后期 `/ja`、`/de`。

---

## 5. 数据模型（初稿）

```
User          id, role(traveler|host|admin), name, email, phone, avatar, languages[], locale
HostProfile   userId, slug, bio, barangay, verifiedBadges[], responseRate, status(pending|approved|suspended)
Listing       id, hostId, type(experience|service|stay), category, title, description, photos[],
              priceFrom, currency(PHP), duration, maxGuests, languages[], location(lat,lng),
              meetingPoint, included[], notIncluded[], cancellationPolicy, status
Availability  listingId, date, slots, isBlocked
Place         id, slug, type(beach|dive_site|waterfall|church|market…), name, description, photos[],
              location, fees, openingHours, lastVerifiedAt
Article       id, slug, locale, title, body(MDX / rich text), coverImage, tags[], publishedAt
Event         id, title, startsAt, endsAt, placeId, recurring
Inquiry       id, listingId, travelerId, date, guests, message, status(new|replied|booked|closed)
Booking       id, listingId, travelerId, date, guests, total, commission, paymentStatus, status
Conversation  id, participants[], listingId? ; Message id, conversationId, senderId, body, readAt
Review        id, bookingId, authorId, targetId, rating, body, photos[]
Favorite      userId, targetType, targetId
Itinerary     id, userId, title, days[{items: placeId|listingId}], isPublic
```

---

## 6. 技术方案

仓库已经是 **Next.js 16 + React 19 + TypeScript + Tailwind v4 + shadcn/ui**，直接在此基础上开发（不再用于克隆网站）。

| 需求 | 推荐方案 | 理由 |
|---|---|---|
| 数据库 + 登录 + 文件存储 + 实时消息 | **Supabase**（Postgres + Auth + Storage + Realtime） | 一个服务覆盖大部分后端，免费额度够 MVP；Row Level Security 做权限 |
| 指南内容 | MVP 用 MDX 文件；内容多了再上 Sanity / Payload CMS | 先简单，编辑者多了再换 |
| 多语言 | `next-intl` | App Router 支持好 |
| 地图 | **MapLibre / Leaflet + OpenStreetMap**（或 Mapbox） | 免费、离线友好 |
| 搜索 | MVP 用 Postgres 全文搜索；数据量大后上 Meilisearch / Algolia | |
| 支付（阶段 3） | **PayMongo** 或 **Xendit**（支持 GCash、Maya、卡）；国际卡可加 Stripe | 本地钱包在菲律宾是刚需 |
| 通知 | Resend（邮件）+ Messenger / WhatsApp 链接；后期 Semaphore（菲律宾短信） | 本地主人更常看短信和 Messenger |
| 图片 | `next/image` + Supabase Storage 或 Cloudinary | 自动压缩（当地网速慢） |
| 部署 | Vercel | 模板已配置 |
| 分析 | Vercel Analytics / Plausible | |

**性能要求：** 当地移动网络不稳定，页面要轻（图片懒加载、静态生成指南页、PWA 离线缓存行程和地图）。

---

## 7. 分阶段路线图

### 阶段 0：调研与供给准备（2–4 周，**最重要，且主要在线下**）
- [ ] 实地走访：拍照、记录景点 / 潜点 / 价格 / 交通
- [ ] 拜访 Dauin 市政府旅游办公室（LGU Tourism Office），争取官方支持或合作
- [ ] 招募首批 **15–30 位本地主人**（船家、向导、潜店、民宿、厨师），帮他们建档
- [x] 域名：www.visitdauin.com
- [ ] Logo、配色定稿
- [ ] 竞品分析：Klook、GetYourGuide、Airbnb Experiences、TripAdvisor 上的 Dauin 内容

> 平台类产品最大的风险不是技术，而是"冷启动"——没有主人，游客来了也没用。

### 阶段 1：MVP — 内容 + 目录 + 询单（4–6 周）
- 首页、关于 Dauin、指南文章（10–20 篇）、景点页、实用信息
- 体验与主人列表（管理员代为录入）、搜索筛选、地图
- 询单表单 → 邮件通知主人 + 一键跳转 WhatsApp / Messenger
- 英文 + 中文
- SEO：结构化数据（TouristAttraction、LocalBusiness、Event）、sitemap、OG 图

**上线标准：** 游客能找到并联系到本地主人。

### 阶段 2：账号与社区（4–6 周）
- 游客 / 主人注册登录，主人自助管理档案和服务
- 站内消息、收藏、评价
- 主人后台（移动端优先）、管理后台审核流程
- 行程规划器、活动日历
- 韩文

### 阶段 3：交易（6–8 周）
- 可用日历、即时预订 / 申请预订
- 在线支付（PayMongo / Xendit）、定金、退款、平台抽佣、给主人结算
- 取消政策、纠纷处理

### 阶段 4：增长
- PWA / App、推送
- 合作伙伴后台（度假村、潜店批量管理）
- 联盟收入（住宿接 Booking / Agoda）
- 社区内容（游客游记、问答）、主人培训

---

## 8. 商业模式

1. **预订佣金** 10–15%（阶段 3 起，主要收入）
2. **主人 / 商家推荐位**（首页、分类置顶）
3. **商家订阅**（潜店、度假村的高级档案、数据分析）
4. **联盟佣金**（住宿、交通、保险外链）
5. **政府 / NGO 合作**（目的地推广、环保项目）

早期建议：**对主人完全免费**，先把供给做起来。

---

## 9. 法律与合规（上线前需确认）

- 菲律宾 **Data Privacy Act of 2012**（个人信息保护，需隐私政策，可能需向 NPC 登记）
- 平台经营主体与营业执照；若代收款项，涉及 BSP 支付相关规定（用 PayMongo / Xendit 等持牌机构可降低风险）
- 主人资质：DOT 认证、LGU 营业执照、潜水教练证书、船只安全许可（MARINA / 海岸警卫队）
- 服务条款：平台是撮合方还是服务提供方？责任划分、保险建议
- 海洋保护区规则与费用必须以官方为准

---

## 10. 成功指标（KPI）

| 阶段 | 指标 |
|---|---|
| 阶段 1 | 月访问量、自然搜索流量、询单数、询单→主人回复率 |
| 阶段 2 | 注册游客数、活跃主人数、评价数、消息响应时间 |
| 阶段 3 | 预订数、GMV、转化率、复购 / 推荐率、主人月收入 |

---

## 11. 待你决定的问题

1. **主要目标客群**是谁？（中国游客 / 韩国潜水客 / 欧美背包客 / 菲律宾国内游客）→ 决定语言优先级和内容风格
2. **第一阶段做到哪一步**？只做"内容 + 联系方式"，还是一开始就要在线预订和支付？
3. **你在 Dauin 有没有现成的本地人资源**？（这决定冷启动难度）
4. **运营主体**：个人 / 公司 / 与 LGU 合作？是否在菲律宾注册？
5. **品牌与域名**：是否已经有名字、Logo、域名？
6. **内容来源**：你自己写，还是需要我先生成初稿（需人工实地核实）？
7. 这个仓库现在是"克隆网站模板"，是否确认改造为 Visit Dauin 项目？
