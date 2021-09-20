package basis.bsb.EMS.servico.Mapper;

import basis.bsb.EMS.dominio.Motivo;
import basis.bsb.EMS.servico.DTO.SelectDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapping;

public interface MotivoMapper extends EntityMapper<SelectDTO, Motivo>{

    @Mapping(source = "id", target = "value")
    @Mapping(source = "descricao", target = "label")
    SelectDTO toDTO(Motivo motivo);

    @InheritInverseConfiguration
    Motivo toEntity(SelectDTO dto);
}
