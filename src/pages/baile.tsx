import { GRUPOS_BAILE } from '../data/databaile'
import FolklorTable from '../components/FolklorTable'

export default function BailePage() {
  return <FolklorTable title="Grupos de Baile" data={GRUPOS_BAILE} />
}
