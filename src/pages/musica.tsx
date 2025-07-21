import { MUSICOS } from '../data/datamusica'
import FolklorTable from '../components/FolklorTable'

export default function MusicaPage() {
  return <FolklorTable title="Músicos Folklóricos" data={MUSICOS} />
}
