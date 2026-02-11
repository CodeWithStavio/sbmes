import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-light px-4"
      dir="rtl"
    >
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-dark mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-gray mb-8 leading-relaxed">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة إلى
          الصفحة الرئيسية.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
