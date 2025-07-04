
## 🎯 **Cấu trúc Prompt Hiệu quả:**

### 1. **Rõ ràng và cụ thể**
```
❌ "Tạo component"
✅ "Tạo một Button component với props: variant (primary/secondary), size (sm/md/lg), và onClick handler"
```

### 2. **Cung cấp context đầy đủ**
```
✅ "Tôi đang làm portfolio React TypeScript, cần tạo Hero section với:
- Background gradient
- Animated text typing effect
- CTA button
- Responsive design"
```

### 3. **Chỉ định format mong muốn**
```
✅ "Tạo interface TypeScript cho User data, bao gồm: name, email, role. 
Trả về code hoàn chỉnh với JSDoc comments"
```

## 🚀 **Các loại prompt hiệu quả:**

### **Cho coding:**
```
"Tạo component [tên] với:
- Props: [danh sách]
- Styling: [yêu cầu]
- Behavior: [chức năng]
- Accessibility: [yêu cầu]"
```

### **Cho debugging:**
```
"Lỗi: [mô tả lỗi]
Code hiện tại: [paste code]
Expected: [kết quả mong muốn]
Environment: [React 18, TypeScript, etc.]"
```

### **Cho optimization:**
```
"Tối ưu component này cho performance:
- Bundle size
- Re-render optimization
- Loading speed
- SEO"
```

## 💡 **Tips quan trọng:**

1. **Một prompt = một task** - Đừng gộp nhiều việc
2. **Cung cấp examples** - Nếu có thể
3. **Chỉ định constraints** - "Không dùng external libraries"
4. **Yêu cầu explanation** - "Giải thích tại sao dùng approach này"

## 📝 **Ví dụ prompt hoàn chỉnh:**
```
"Claude, tôi cần tạo một ContactForm component cho portfolio:

Props:
- onSubmit: (data: ContactData) => void
- loading?: boolean

Features:
- Form validation với error messages
- Responsive design (mobile-first)
- Accessibility (ARIA labels, keyboard nav)
- Loading state với spinner

Styling:
- Modern design với gradient buttons
- Error states với red borders
- Success feedback

Tech stack: React 18, TypeScript, CSS Modules

Trả về component hoàn chỉnh với TypeScript interfaces và comments giải thích logic validation."
```

## �� **Kết quả mong đợi:**
- Code sạch, có comments
- TypeScript interfaces đầy đủ
- Accessibility features
- Responsive design
- Error handling

**Bạn có muốn tôi demo với một prompt cụ thể không?** 😊