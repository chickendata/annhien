import Icon from "@/components/atoms/Icon";

export default function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[color:var(--brand)]">
          <Icon name="instagram" size={18} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[color:var(--brand)]">
          <Icon name="facebook" size={18} />
        </a>
      </div>
    </div>
  );
}
