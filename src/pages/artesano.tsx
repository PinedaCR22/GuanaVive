import { ARTESANOS } from '../data/dataartesano'
import FolklorTable from '../components/FolklorTable'

export default function ArtesanoPage() {
  return <FolklorTable title="Lista de Artesanos" data={ARTESANOS} />
}
