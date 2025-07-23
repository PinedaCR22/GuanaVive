import { HACIENDAS } from '../data/datahacienda'
import FolklorTable from '../components/FolklorTable'

export default function HaciendaPage() {
  return <FolklorTable title="Haciendas Tradicionales" data={HACIENDAS} />
}
