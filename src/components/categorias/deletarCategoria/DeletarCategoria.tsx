import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Categoria from '../../../models/Categoria'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch {
      toastAlerta("Erro: categoria não encontrada", "erro")
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/categorias")
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`)
      toastAlerta("Categoria apagada com sucesso", "sucesso")
    } catch (error) {
      toastAlerta("Erro ao apagar a categoria", "erro")
    }

    retornar()
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-meddium-blue text-white-new font-bold text-2xl">
          Categoria
        </header>
        
        <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>
        <div className="flex">
        <button
            className="w-full text-white-new bg-wine hover:bg-wine flex items-center justify-center"
            onClick={deletarCategoria}
          >
            Sim
          </button>
          <button
            className="text-white-new bg-green hover:bg-green w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria