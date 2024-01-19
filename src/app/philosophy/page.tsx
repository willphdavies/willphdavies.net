import { TemplatDefault } from "@/common";
import { Philosophy } from "@/common/philosophy";

export default function PagePhilosophy() {
  return (
    <TemplatDefault
      mast={
        <div>
          <h1>Development Philosophy</h1>
        </div>
      }
      backgroundSrc="/philosophy.jpg"
    >
      <Philosophy />
    </TemplatDefault>
  );
}
